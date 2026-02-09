import { Camera } from "@/types/canvas";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  "#2563EB", // blue
  "#10B981", // emerald
  "#F59E0B", // amber
  "#EF4444", // red
  "#8B5CF6", // violet
  "#14B8A6", // teal
  "#F97316", // orange
  "#EC4899", // pink
  "#22C55E", // green
  "#06B6D4"  // cyan
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e:React.PointerEvent,
  camera:Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y
  }
}