// Returns array of student ids using map
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  return students.map((student) => student.id);
}