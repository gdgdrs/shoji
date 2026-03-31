import Link from "next/link";
import { circleInfos } from "./circles";

export const dynamic = "error";
export const revalidate = false;

export default function Page() {
  return (
    <>
      <h1 className="text-2xl">サークル一覧</h1>
      <div className="flex flex-wrap">
        {circleInfos.map((circleInfo) => (
          <div
            key={circleInfo.circleName}
            className="card image-full w-80 shadow-xl mx-auto m-8"
          >
            <figure>
              <img src={circleInfo.Image} alt="Nakatsuji" />
            </figure>
            <div className="card-body bg-black/40">
              <h2 className="card-title">
                <Link href={`/circles/${circleInfo.circleName}`}>
                  {circleInfo.circleName}
                </Link>
              </h2>
              <p>{circleInfo.shortDescription}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">詳細ページへ</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
