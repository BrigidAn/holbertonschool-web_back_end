// Returns students filtered by city using filter
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}