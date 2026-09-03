import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Ram',
      age: 24,
    },
    {
      id: 2,
      name: 'Sam',
      age: 25,
    },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const matchStudent = this.students.find((s) => s.id === id);
    if (!matchStudent) throw new NotFoundException('Student not found!');
    return matchStudent;
  }

  // POST
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  //  PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student not found!');

    this.students[index] = { id, ...data };
  }

  //   PATCH
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  //   DELETE
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student not found!');

    const deleted = this.students.splice(index, 1);
    return {
      message: 'Student Deleted',
      student: deleted[0],
    };
  }
}
