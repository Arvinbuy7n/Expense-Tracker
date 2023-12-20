import { EachMap } from "./EachMap";

export const DashMap = () => {
    const data = [
        "Lending & Renting",
        "Lending & Renting",
        "Lending & Renting",
        "Lending & Renting",
        "Lending & Renting",
        "Lending & Renting",
    ];

    return (
        <div className="w-full flex flex-col gap-5 py-2">
            <div className="flex flex-col gap-4 text-[16px] font-normal">
                {data.map((each, index) => {
                    return <EachMap key={index} title={each} />;
                })}
            </div>
        </div>
    )
}
