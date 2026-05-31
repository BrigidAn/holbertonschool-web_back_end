// Returns sum of student ids using reduce
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}