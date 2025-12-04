import fs from 'fs';
import path from 'path';

const coursesDirectory = path.join(process.cwd(), 'content/courses');

export async function getCourseMdx(slug: string) {
  const fullPath = path.join(coursesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return fileContents;
}
