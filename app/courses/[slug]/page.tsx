import { notFound } from 'next/navigation';
import { courses } from '@/data/courses';
import { getCourseMdx } from '@/lib/mdx-courses';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { KnowledgeGraphLinks } from '@/components/KnowledgeGraphLinks';

type Props = { params: Promise<{ slug: string }> };

const components = {
  KnowledgeGraphLinks,
};

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return notFound();

  const mdxSource = await getCourseMdx(slug);

  if (!mdxSource) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs uppercase tracking-wide text-gray-500">
        {course.term}
      </p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">
        {course.code} · {course.title}
      </h1>
      <p className="mt-1 text-sm text-gray-600">
        {course.institution}
      </p>

      <article className="prose prose-sm mt-6 max-w-none dark:prose-invert">
        <MDXRemote source={mdxSource} components={components} />
      </article>
    </main>
  );
}

