import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const DetailPKinerja = () => {
  return (
    <div className="bg-white">
      <div className="w-full mt-16 px-5 h-screen relative">
        {/* Jika selectedData ada, tampilkan nama, jika tidak tampilkan pesan */}
        <p className="font-bold text-2xl">
          Presensi:{" "}
          <span className="bg-gray-300 border border-gray-500 p-1 rounded-md">
            Suryanto
          </span>{" "}
        </p>
        <div className="flex w-full gap-1 justify-start">
          <div className="">
            <p>
              Berikut ini adalah penilaian kinerja dari karyawan yang Anda
              pilih.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full mt-4 border-collapse border border-gray-300">
            <thead className="bg-[#CEF6C0]">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tanggal
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Keterangan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jam Mulai Kerja
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jam Selesai Kerja
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Poin Ketepatan Waktu
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Poin Kerajinan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Poin Kehadiran
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Total Poin
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Rincian
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  30/07/2024
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Hadir
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  07:30
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  20:00
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  0
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  10
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  10
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  20
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="absolute bottom-3 right-5">
          <button className="bg-[#174A04] rounded-lg px-3 py-1 border border-gray-500 text-white">
            Ekspor Sebagai PDF
          </button>
        </div>
      </div>

      <div className="px-5">
        <p className="font-bold text-2xl">
          Rekomendasi bonus berdasarkan poin :{" "}
          <span className="bg-gray-300 border border-gray-500 p-1 rounded-md">
            Rp. 100.000 - Rp. 150.000
          </span>{" "}
        </p>
        <div className="flex gap-2 my-3 items-center">
          <p className="font-normal ">
            Keterangan: <br />
            Poin Ketepatan Waktu adalah poin berdasarkan jam mulai kerja. <br />
            Poin Kerajinan adalah poin berdasarkan jam selesai kerja. <br />
            Poin Kehadiran adalah poin berdasarkan jumlah kehadiran dalam 1
            bulan
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPKinerja;
