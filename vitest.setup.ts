import '@testing-library/jest-dom/vitest';
import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register();

export const modules = import.meta.glob('./**/!(*.*.*)*.*s');
