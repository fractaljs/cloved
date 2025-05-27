import React from "react";

const pointers = [
  "The menu should be as wide as the dropdown.",
  "The menu should not be narrower than the dropdown.",
];

const Guideline = ({
  title,
  doLabel,
  dontLabel,
  doImage,
  dontImage,
  doPointers,
  dontPointers,
}: {
  title: string;
  doLabel: string;
  dontLabel: string;
  doImage: string;
  dontImage: string;
  doPointers: string[];
  dontPointers: string[];
}) => {
  return (
    <div className="w-full py-4 mb-4">
      <h4>{title}</h4>

      <div className="flex gap-4 w-full">
        <div className="w-1/2 flex flex-col gap-2">
          {doImage && <img src={doImage} />}
          <div className="w-fit text-[#008236] font-medium text-xs bg-[#F0FDF4] px-2 py-0.5 rounded-full inline-block !mb-2">
            Do
          </div>
          {doLabel && (
            <p className="text-sm text-fd-secondary-foreground">{doLabel}</p>
          )}
          {doPointers && doPointers.length > 0 && (
            <ul className="text-sm text-fd-secondary-foreground list-disc pl-4">
              {doPointers.map((pointer, index) => (
                <li key={index}>{pointer}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          {dontImage && <img src={dontImage} />}
          <div className="w-fit text-[#C10007] font-medium text-xs bg-[#FEF2F2] px-2 py-0.5 rounded-full inline-block !mb-2">
            Dont
          </div>
          {dontLabel && (
            <p className="text-sm text-fd-secondary-foreground">{dontLabel}</p>
          )}
          {dontPointers && dontPointers.length > 0 && (
            <ul className="text-sm text-fd-secondary-foreground list-disc pl-4">
              {dontPointers.map((pointer, index) => (
                <li key={index}>{pointer}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guideline;
