/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function GridOverlay() {
  return (
    <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0 overflow-hidden select-none hidden md:block">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-8 relative">
        
        {/* Standard Left blueprint outline guide */}
        <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-[1.5px] bg-zinc-200/55 dark:bg-zinc-850/40" />

        {/* Column Divider guide lining up with 1/3 of the layout (col-span-4 boundary) */}
        <div className="absolute left-[calc(33.333333%+2.7px)] top-0 bottom-0 w-[1.5px] bg-zinc-200/55 dark:bg-zinc-850/40" />

        {/* Standard Right blueprint outline guide */}
        <div className="absolute right-4 sm:right-6 md:right-8 top-0 bottom-0 w-[1.5px] bg-zinc-200/55 dark:bg-zinc-850/40" />

        {/* Decorative corner grid coordinate marks */}
        <div className="absolute left-10 top-20 text-[9px] font-mono text-zinc-300 dark:text-zinc-800 tracking-wider">
          X_VAL (LN 04)
        </div>
        <div className="absolute right-10 top-[40%] text-[9px] font-mono text-zinc-300 dark:text-zinc-800 tracking-wider">
          Y_SEC (CD_MID)
        </div>
        <div className="absolute left-[35%] bottom-24 text-[9px] font-mono text-zinc-300 dark:text-zinc-800 tracking-wider">
          CO_ORD (VN_HCM)
        </div>

      </div>
    </div>
  );
}
