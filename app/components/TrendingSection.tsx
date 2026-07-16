import Image from "next/image";
import { ChevronRight } from "lucide-react";

// The five trending titles shown in the reference capture
const TRENDING_ITEMS = [
  {
    rank: 1,
    title: "Avatar: The Last Airbender",
    posterUrl:
      "https://occ-0-6516-64.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYMJOpwnAZIoMUgOROfg4f5HaS2Rs-vsp9ue-oVi_GpL52CBKfYbmqe7miOu8l3BDGv-6_r-5SsZUrBb4vPxDuKNnZotR0Un3O4Kyxh5fgqD2BnjYtqM4mKoepuEZeZrYfF5.webp?r=627",
  },
  {
    rank: 2,
    title: "Sex/Life",
    posterUrl:
      "https://occ-0-6516-64.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcaxAOO875GJCdVuF0m1TZ3t7bpSuHTJByPn3R_IUKqnTVM3S9XmcC4-g-Ep1TblyvtA-xEjnx4TKXkxqIX8uBSLvyp-xQUUyfntLLUhwqlyTdsAomLuue-Df9gov2xymJYy.webp?r=62a",
  },
  {
    rank: 3,
    title: "Blast",
    posterUrl:
      "https://occ-0-6516-64.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdCNdKR9dgupDlDI12eOrjd3d1uHJXGw537qUxGjCrEHiyDqJ5OIPTEP107q4e-qLJERuWreYp5bF7t5BxNEI7SfZhIY3p_Sp4w.webp?r=434",
  },
  {
    rank: 4,
    title: "Swapped",
    posterUrl:
      "https://occ-0-6516-64.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZ4ezVo61K2GyH4ZybaTO3jDTOIhbPcxxbdcIzy6jKM4QLl91msAEv7TanOsxxly-0qQMLdV7bHHKtlOyWXKmu_KGbyjnizuJNXrx4OAbUyWEj4PuRXKPsOMh5CHW1CqnYp-.webp?r=0c6",
  },
  {
    rank: 5,
    title: "Teach You a Lesson",
    posterUrl:
      "https://occ-0-6516-64.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABY63h-h1Gon9p3n_dSWmou2ZyN__EntViMFXWrNen_vEcZGZ7-_P9_z-hxdiUdzgbN83VIT29Y9tL6qEg5MJryhB2k6k1kxsyeFMlH5GvvBIqaqk_qc8LS0XezttgoZGS2hX.webp?r=58c",
  },
] as const;

// Individual movie poster with rank overlay
interface TrendingCardProps {
  rank: number;
  title: string;
  posterUrl: string;
}

function TrendingCard({ rank, title, posterUrl }: TrendingCardProps) {
  return (
    <article className="relative flex-shrink-0 mr-4 md:mr-0">
      <span aria-hidden="true" className="rank-number absolute bottom-[20px] md:bottom-[28px] left-0 z-10 text-[64px] md:text-[98px]">
        {rank}
      </span>

      <div
        id={rank === 1 ? "trending-first-poster" : undefined}
        className="relative ml-[22px] md:ml-[32px] h-[180px] w-[125px] sm:h-[210px] sm:w-[150px] md:h-[280px] md:w-[200px] overflow-hidden rounded-xl xl:scale-[0.9] origin-left"
      >
        <Image src={posterUrl} alt={title} fill sizes="(min-width: 768px) 200px, 150px" className="object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>
    </article>
  );
}

function ScrollIndicator() {
  return (
    <div
      id="trending-scroll-indicator"
      aria-label="Scroll for more"
      role="button"
      className="flex flex-shrink-0 self-center items-center justify-center w-8 h-24 bg-zinc-800/70 backdrop-blur-sm cursor-pointer rounded-lg transition-colors duration-150 hover:bg-zinc-700/90 ml-4 mr-2"
    >
      <ChevronRight className="w-6 h-6 text-gray-400" strokeWidth={2} />
    </div>
  );
}

// TrendingSection
export default function TrendingSection() {
  return (
    <section
      aria-label="Trending Now"
      className="bg-black w-full pt-4 pb-6 md:py-8"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-16 mb-4 xl:translate-x-[85px] xl:-translate-y-4">
        <h2 className="text-white text-xl md:text-2xl font-medium tracking-normal">
          Trending Now
        </h2>
      </div>
      <div className="mx-auto w-full max-w-[1440px] md:px-10 xl:px-16">
        <div className="relative flex overflow-hidden rounded-r-md scale-99 xl:-translate-y-7 xl:translate-x-6 origin-top">

          {/* Scrollable cards row */}
          <div
            className="flex gap-0 overflow-x-auto scrollbar-hide px-6 md:px-0 md:pl-[40px] pb-4"
          >
            {TRENDING_ITEMS.map((item) => (
              <TrendingCard
                key={item.rank}
                rank={item.rank}
                title={item.title}
                posterUrl={item.posterUrl}
              />
            ))}
          </div>

          {/* Right-edge scroll trigger */}
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}
