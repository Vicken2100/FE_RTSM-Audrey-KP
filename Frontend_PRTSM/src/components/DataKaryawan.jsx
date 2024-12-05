import React from "react";
import Footer from "./Footer";

const DataKaryawan = () => {
  return (
    <div className="bg-white">
      <div className="w-full mt-16 px-5 h-screen relative">
        <p className="font-bold text-2xl">Data Karyawan</p>

        <div className="overflow-x-auto">
          <table className="min-w-full mt-4 border-collapse border border-gray-300">
            <thead className="bg-[#CEF6C0]">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama Lengkap
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jabatan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tanggal Masuk Pegawai
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tanggal Lahir
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jenis Kelamin
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  NIK
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No Telp
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Status Pernikahan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama Bank
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nomor Rekening
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama Pemegang Rekening
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Provinsi
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Kabupaten/Kota
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Kecamatan/ <br />
                  Kelurahan
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Supriyadi Anggoman
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Supir
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  23 Mei 2023
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  01/02/1980
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Laki-Laki
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1921681101109
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  081234567890
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  SupriGanteng@gmail.com
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Belum Menikah
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  BNI
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  0102198969
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Supriyadi Anggoman
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Sulawesi Utara
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Manado
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Singkil
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DataKaryawan;
