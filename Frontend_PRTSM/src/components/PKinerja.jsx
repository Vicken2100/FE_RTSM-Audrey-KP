import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const PKinerja = () => {
  return (
    <div className="bg-white">
      <div className="w-full mt-16 px-5 h-screen relative">
        <p className="font-bold text-2xl">Penilaian Kinerja</p>
        <p className="font-normal text-base">
          Berikut ini adalah tabel penilaian kinerja dari semua karyawan Anda
        </p>
        <div className="flex w-full gap-1 justify-end">
          <select className="rounded-lg border w-52 border-gray-500 p-1">
            <option value="">Bulan</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full mt-4 border-collapse border border-gray-300">
            <thead className="bg-[#CEF6C0]">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jabatan
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
                  Suryanto
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Sales
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  20/30
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  30/30
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  40/40
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  90/100
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Link
                    to={`/Kinerja/1`}
                    className="bg-[#DEFABB] p-1 rounded-md border border-gray-500 "
                  >
                    Tampilkan
                  </Link>
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

export default PKinerja;
