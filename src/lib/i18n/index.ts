import { errorNotFound } from "./errors/error-notfound";
import { footer } from "./footer/footer";
import { about } from "./sections/about";
import { contact } from "./sections/contact";
import { education } from "./sections/education";
import { experience } from "./sections/experience";
import { github } from "./sections/github";
import { hero } from "./sections/hero";
import { projects } from "./sections/projects";
import { skills } from "./sections/skills";

export const translations = {
    en: {
        ...hero.en,
        ...about.en,
        ...education.en,
        ...experience.en,
        ...skills.en,
        ...github.en,
        ...projects.en,
        ...contact.en,
        ...footer.en,
        ...errorNotFound.en,
    },
    id: {
        ...hero.id,
        ...about.id,
        ...education.id,
        ...experience.id,
        ...skills.id,
        ...github.id,
        ...projects.id,
        ...contact.id,
        ...footer.id,
        ...errorNotFound.id,
    },
} as const;

export type Locale = keyof typeof translations;