import TitleForProject from "@/components/projects/title-for-project";
import { getProjectsData } from "@/helpers/misc";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
export default async function Page({ params }) {
  const resolvedParams = await params;   // params'i await et
  const { locale, title } = resolvedParams;

  if (!locale || !title) {
    return notFound();
  }

  const t = await getTranslations("projects");
  const projects = getProjectsData(t, `/${locale}`);

  const currentProject = projects.find(
    (project) => project.slug === title || project.localizedSlug === title
  );

  if (!currentProject) {
    return notFound();
  }

  return (
    <>
      <TitleForProject currentProject={currentProject} />
    </>
  );
}
