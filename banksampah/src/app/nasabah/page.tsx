"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import { FiLogOut } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import useStore from "../store/useStore";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const WasteBarChart: React.FC = () => {
  const setoran = useStore((state) => state.setoran);

  // Extract waste types and their total weights
  const barChartCategories = [
    ...new Set(setoran.map((item) => item.namaSampah)),
  ];
  const barChartData = barChartCategories.map((type) =>
    setoran
      .filter((item) => item.namaSampah === type)
      .reduce((sum, current) => sum + current.berat, 0)
  );

  // Sort by weight and limit to top 5
  const sortedData = barChartCategories
    .map((category, index) => ({
      category,
      weight: barChartData[index],
    }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 5);

  const topCategories = sortedData.map((item) => item.category);
  const topWeights = sortedData.map((item) => item.weight);

  const barChartOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: topCategories,
    },
  };

  const barChartSeries = [
    {
      name: "Berat (kg)",
      data: topWeights,
    },
  ];

  return (
    <div className="relative w-full px-6">
      <ReactApexChart
        options={barChartOptions}
        series={barChartSeries}
        type="bar"
        height={300}
      />
    </div>
  );
};

const WasteTrendChart: React.FC = () => {
  const setoran = useStore((state) => state.setoran);

  // Extract unique dates and calculate total weight for each date
  const trendChartCategories = [
    ...new Set(setoran.map((item) => item.tanggalSetor)),
  ].sort();
  const trendChartData = trendChartCategories.map((date) =>
    setoran
      .filter((item) => item.tanggalSetor === date)
      .reduce((sum, current) => sum + current.berat, 0)
  );

  // Sort by weight and limit to top 5
  const sortedTrendData = trendChartCategories
    .map((date, index) => ({
      date,
      weight: trendChartData[index],
    }))
    .slice(0, 5);

  const topDates = sortedTrendData.map((item) => {
    const date = new Date(item.date);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear().toString().slice(-2)}`;
  });
  const topWeights = sortedTrendData.map((item) =>
    parseFloat(item.weight.toFixed(2))
  );

  const lineChartOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: topDates,
    },
    yaxis: {
      title: {
        text: "Berat (kg)",
      },
    },
  };

  const lineChartSeries = [
    {
      name: "Jumlah Berat (kg)",
      data: topWeights,
    },
  ];

  return (
    <div className="relative w-full px-6">
      <ReactApexChart
        options={lineChartOptions}
        series={lineChartSeries}
        type="line"
        height={300}
      />
    </div>
  );
};

export default function page() {
  const name = useStore((state) => state.nama);
  const role = useStore((state) => state.role);
  return (
    <>
      <div className="">
        {/* Mavbar */}
        <Navbar userData={{ name, role }} />

        {/* Content */}
        <div className="max-w-screen-lg mx-auto top-24 relative px-6">
          <div className="mt-12 md:mt-6 md:flex justify-between gap-6">
            <div className="w-full md:max-w-[38rem] text-center md:text-start relative md:top-16">
              <div className="text-3xl md:text-4xl mb-3">Selamat Datang,</div>
              <div className="text-4xl md:text-5xl mb-4">
                Rani <span className="text-3xl"> (E24)</span>
              </div>
              <p className="md:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                molestiae sapiente aperiam delectus maxime eius laboriosam a
                natus blanditiis recusandae.
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center md:items-end items-center h-[16rem] md:h-max min-w-max  relative">
              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <div className="text-lg md:text-base">saldo saya</div>
                  <div className="text-2xl md:text-lg font-semibold">
                    Rp 28.500
                  </div>
                </div>
                <div className="md:size-16 size-20 relative">
                  <Image src="/Assets/wallet.png" fill alt="Wallet" />
                </div>
              </div>
              <button className="py-2.5 px-8 w-max border rounded-full">
                Tarik Saldo
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-sm border rounded-xl relative md:top-24 mt-8 px-6 py-6">
            <div className="text-xl text-center mb-3">Kehadiran</div>
            <div className="">
              <div className="mx-auto w-full lg:max-w-[28rem] h-6 bg-gray-200 rounded-full relative">
                {/* Progress fill */}
                <div
                  className="h-6 bg-green-600 rounded-full"
                  style={{ width: "72%" }}
                ></div>
                {/* Centered Text */}
                <div className="absolute inset-0 flex justify-center items-center text-lg font-medium text-blue-100">
                  72%
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl relative md:top-24 mt-8 p-4">
            <div className="text-2xl text-center mb-3">Dashboard</div>
            <div className="flex md:flex-row flex-col gap-4 mb-6">
              <div className="w-full border rounded-md ">
                <div className="text-center text-lg my-3">Jenis Sampah</div>
                <WasteBarChart />
              </div>
              <div className="w-full border rounded-md">
                <div className="text-center text-lg my-3">Trend Sampah</div>
                <WasteTrendChart />
              </div>
            </div>
            <div className="w-full flex justify-center items-center mb-12">
              <div className="w-full max-w-screen-sm border rounded-md">
                <div className="relative overflow-x-auto">
                  <div className="text-center text-lg py-2 bg-gray-50">
                    12 Juni 2024
                  </div>
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="md:px-6 md:py-3 px-4 py-2 hidden md:table-cell"
                        >
                          No
                        </th>
                        <th scope="col" className="md:px-6 md:py-3 px-4 py-2">
                          Barang
                        </th>
                        <th scope="col" className="md:px-6 md:py-3 px-4 py-2">
                          Harga/Kg
                        </th>
                        <th scope="col" className="md:px-6 md:py-3 px-4 py-2">
                          Berat
                        </th>
                        <th scope="col" className="md:px-6 md:py-3 px-4 py-2">
                          Rupiah
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="md:px-6 md:py-4 px-3 py-2 font-medium text-gray-900 whitespace-nowrap hidden md:table-cell"
                        >
                          1
                        </th>
                        <td className="md:px-6 md:py-4 px-3 py-2">
                          Aqua Botol Bersih
                        </td>
                        <td className="md:px-6 md:py-4 px-3 py-2">Rp 2000</td>
                        <td className="md:px-6 md:py-4 px-3 py-2">0.8 Kg</td>
                        <td className="md:px-6 md:py-4 px-3 py-2">Rp 1600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
