import Image from "next/image";

const Momento = () => {
    return (
        <div className="rounded-xl bg-white p-4">
            <div className="mt-5 flex px-20 items-center gap-4 flex-col">
                <div className="flex px-2 items-center">
                    <Image src="/Sol.svg" alt="" width={106} height={106}></Image>
                </div>
            </div>
        </div>
    )
}

export default Momento