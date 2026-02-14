"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950 overflow-hidden",
                className
            )}
        >
            <div className="absolute h-full w-full pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                <div className="absolute top-[50%] left-[50%] h-[200vh] w-[200vw] -translate-x-[50%] -translate-y-[50%] bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_50%)]"></div>
                {/* Beams */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "absolute top-1/2 left-1/2 h-[1px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-50",
                                "animate-move"
                            )}
                            style={{
                                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                                animationDelay: `${i * 2}s`,
                                animationDuration: `${15 + i * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
