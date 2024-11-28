import React from "react";
import Footer from "./Footer";

const PGaji = () => {
  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Pengaturan</h1>
        <p className="text-gray-600">
          Atur semua perhitungan dasar dari penggajian di sini.
        </p>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Jabatan dan Rincian Gaji</h2>
          </div>
          <div className="p-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 border-b">Jabatan</th>
                    <th className="px-4 py-3 border-b">Gaji Pokok</th>
                    <th className="px-4 py-3 border-b">Tunjangan Keluarga</th>
                    <th className="px-4 py-3 border-b">Tunjangan Kesehatan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Sales</td>
                    <td className="px-4 py-3 border-b">Rp.3.700.000</td>
                    <td className="px-4 py-3 border-b">Rp.370.000</td>
                    <td className="px-4 py-3 border-b">Rp.250.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Supir</td>
                    <td className="px-4 py-3 border-b">Rp.3.250.000</td>
                    <td className="px-4 py-3 border-b">Rp.325.000</td>
                    <td className="px-4 py-3 border-b">Rp.250.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Karyawan Kantor</td>
                    <td className="px-4 py-3 border-b">Rp.3.500.000</td>
                    <td className="px-4 py-3 border-b">Rp.350.000</td>
                    <td className="px-4 py-3 border-b">Rp.250.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="mt-4 px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
              <span className="mr-2">+</span>
              Tambah Baris
            </button>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700">
                Simpan
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Uang Makan</h2>
          </div>
          <div className="p-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 border-b">Lokasi Kerja</th>
                    <th className="px-4 py-3 border-b">Uang Makan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Tomohon</td>
                    <td className="px-4 py-3 border-b">Rp.30.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Bitung</td>
                    <td className="px-4 py-3 border-b">Rp.30.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Kotamobagu</td>
                    <td className="px-4 py-3 border-b">Rp.45.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="mt-4 px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
              <span className="mr-2">+</span>
              Tambah Baris
            </button>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700">
                Simpan
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Uang Lembur</h2>
          </div>
          <div className="p-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 border-b">Jam</th>
                    <th className="px-4 py-3 border-b">Uang Lembur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">20:01 - 21:00</td>
                    <td className="px-4 py-3 border-b">Rp.30.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">21:01 - 22:00</td>
                    <td className="px-4 py-3 border-b">Rp.35.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">22:01 - 23:00</td>
                    <td className="px-4 py-3 border-b">Rp.45.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="mt-4 px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
              <span className="mr-2">+</span>
              Tambah Baris
            </button>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700">
                Simpan
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Bonus</h2>
          </div>
          <div className="p-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 border-b">Interval Poin</th>
                    <th className="px-4 py-3 border-b">Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">300 - 350</td>
                    <td className="px-4 py-3 border-b">Rp.100.000 - 150.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">351 - 400</td>
                    <td className="px-4 py-3 border-b">Rp.151.000 - 200.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">401 - 450</td>
                    <td className="px-4 py-3 border-b">Rp.201.000 - 250.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="mt-4 px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
              <span className="mr-2">+</span>
              Tambah Baris
            </button>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700">
                Simpan
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Indikator Penilaian</h2>
          </div>
          <div className="p-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 border-b">Indikator</th>
                    <th className="px-4 py-3 border-b">Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Jam Mulai Kerja</td>
                    <td className="px-4 py-3 border-b">20%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Jam Selesai Kerja</td>
                    <td className="px-4 py-3 border-b">40%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Kehadiran</td>
                    <td className="px-4 py-3 border-b">60%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="mt-4 px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
              <span className="mr-2">+</span>
              Tambah Baris
            </button>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700">
                Simpan
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Uang Makan</h2>
          </div>
          <div className="p-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 border-b">Lokasi Kerja</th>
                    <th className="px-4 py-3 border-b">Uang Makan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Tomohon</td>
                    <td className="px-4 py-3 border-b">Rp.30.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Bitung</td>
                    <td className="px-4 py-3 border-b">Rp.30.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">Kotamobagu</td>
                    <td className="px-4 py-3 border-b">Rp.45.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="mt-4 px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
              <span className="mr-2">+</span>
              Tambah Baris
            </button>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PGaji;
