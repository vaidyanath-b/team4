"use client";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
export default function ViewNRI() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/nri");
      const data = await response.json();
      console.log(data);
      setStudents(data);
    };
    fetchData();
  }, []);
  return (
    students && (
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Application No</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date Of Birth</TableHead>
              <TableHead>District</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Graduation Year</TableHead>
              <TableHead>Major</TableHead>
              <TableHead>Percentage</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>School</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Street</TableHead>{" "}
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.applicationNo}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell>{student.dateOfBirth}</TableCell>
                <TableCell>{student.district}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.graduationYear}</TableCell>
                <TableCell>{student.major}</TableCell>
                <TableCell>{student.percentage}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.school}</TableCell>
                <TableCell>{student.state}</TableCell>
                <TableCell>{student.street}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  );
}
