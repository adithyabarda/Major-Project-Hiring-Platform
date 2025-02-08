import React, { useState } from "react";
import DevNavbar from "../components/DevNavbar";
import { Briefcase, Calendar, Filter } from "lucide-react";

const companiesData = [
  { id: 1, name: "Google", role: "Software Engineer", skills: ["React", "Node.js"], uploadDate: "2025-02-01" },
  { id: 2, name: "Microsoft", role: "Backend Developer", skills: ["C#", "SQL"], uploadDate: "2025-02-02" },
  { id: 3, name: "Amazon", role: "Data Engineer", skills: ["Python", "AWS"], uploadDate: "2025-02-03" },
  { id: 4, name: "Meta", role: "Full Stack Developer", skills: ["React", "Express"], uploadDate: "2025-02-04" },
  { id: 5, name: "Netflix", role: "Frontend Engineer", skills: ["JavaScript", "Vue.js"], uploadDate: "2025-02-05" },
];

const CompaniesListPage = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const filteredCompanies = selectedDate
    ? companiesData.filter((company) => company.uploadDate === selectedDate)
    : companiesData;

  return (
    <div className="bg-gray-100 min-h-screen">
      <DevNavbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-green-700 flex items-center">
          <Briefcase className="mr-2" /> Hiring Companies
        </h1>

        <div className="mb-6 flex items-center space-x-4">
          <Filter className="text-gray-700" />
          <label className="font-medium text-gray-800">Filter by Upload Date:</label>
          <input
            type="date"
            className="border rounded-md p-2 bg-white shadow-sm"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Job Role</th>
              <th className="p-3 text-left">Required Skills</th>
              <th className="p-3 text-left flex items-center"><Calendar className="mr-1" /> Upload Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => (
              <tr key={company.id} className="border-b hover:bg-gray-200 transition">
                <td className="p-3">{company.name}</td>
                <td className="p-3">{company.role}</td>
                <td className="p-3">{company.skills.join(", ")}</td>
                <td className="p-3">{company.uploadDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompaniesListPage;
