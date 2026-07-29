import React from "react";

/**
 * Ensures Google Drive image error fallback automatically switches between 
 * lh3.googleusercontent.com, thumbnail endpoint, and uc export endpoint.
 */
export function handleDriveImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackId?: string
) {
  const target = e.currentTarget;
  if (!target) return;

  const currentSrc = target.src;
  
  // Extract file ID
  let fileId = fallbackId || "";
  if (!fileId) {
    if (currentSrc.includes("googleusercontent.com/d/")) {
      fileId = currentSrc.split("googleusercontent.com/d/")[1]?.split("?")[0]?.split("/")[0] || "";
    } else if (currentSrc.includes("drive.google.com/file/d/")) {
      fileId = currentSrc.split("drive.google.com/file/d/")[1]?.split("/")[0] || "";
    } else if (currentSrc.includes("id=")) {
      const match = currentSrc.match(/id=([a-zA-Z0-9_-]+)/);
      if (match) fileId = match[1];
    }
  }

  if (fileId) {
    if (currentSrc.includes("googleusercontent.com")) {
      target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
    } else if (currentSrc.includes("thumbnail")) {
      target.src = `https://docs.google.com/uc?export=view&id=${fileId}`;
    }
  }
}
