// ==================================================
//  PORTFOLIO CONFIG — edit personal info & links here
// ==================================================

export const profile = {
  name: 'LUKE ALMEIDA',
  role: 'JAVA BACKEND DEVELOPER',
  tagline: 'Building backend systems with Java & Spring.',
  keywords: ['APIs', 'Databases', 'Testing', 'Software Engineering'],
  about: [
    'Backend developer focused on Java and Spring Boot.',
    'Interested in REST APIs, databases, testing, software',
    'architecture, and building reliable applications that',
    'are maintainable and well-documented.',
  ],
  links: {
    github: 'PLACEHOLDER_GITHUB_PROFILE',
    linkedin: 'PLACEHOLDER_LINKEDIN_PROFILE',
    email: 'PLACEHOLDER_EMAIL@example.com',
  },
} as const;

// ==================================================
//  PROJECTS — add new projects to this array
// ==================================================

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  status: string;
}

export const projects: Project[] = [
  {
    id: 'task-management-api',
    name: 'TASK-MANAGEMENT-API',
    description: 'A REST API for task management, built with Java and Spring Boot.',
    tech: [
      'Java 21',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'Flyway',
      'Docker',
      'JUnit',
      'Mockito',
      'Testcontainers',
      'OpenAPI / Swagger',
      'JaCoCo',
      'SpotBugs',
      'OWASP Dependency-Check',
      'GitHub Actions',
    ],
    links: [
      { label: 'GITHUB', url: 'PLACEHOLDER_GITHUB_TASK_API' },
      { label: 'LIVE API', url: 'https://task-management-api-f7xf.onrender.com' },
      { label: 'SWAGGER', url: 'https://task-management-api-f7xf.onrender.com/swagger-ui.html' },
    ],
    status: 'DEPLOYED',
  },
];

// ==================================================
//  STACK — technology list
// ==================================================

export interface StackEntry {
  label: string;
  value: string;
}

export const stack: StackEntry[] = [
  { label: 'LANGUAGE', value: 'Java 21' },
  { label: 'FRAMEWORK', value: 'Spring Boot' },
  { label: 'DATABASE', value: 'PostgreSQL' },
  { label: 'ORM', value: 'Spring Data JPA' },
  { label: 'MIGRATION', value: 'Flyway' },
  { label: 'TESTING', value: 'JUnit / Mockito' },
  { label: 'INTEGRATION TEST', value: 'Testcontainers' },
  { label: 'CONTAINERS', value: 'Docker' },
  { label: 'CI', value: 'GitHub Actions' },
  { label: 'API DOCS', value: 'OpenAPI / Swagger' },
];

// ==================================================
//  ENGINEERING — concepts and known results
// ==================================================

export interface EngineeringLog {
  command: string;
  result: string;
  status: 'ok' | 'info';
}

export const engineeringLogs: EngineeringLog[] = [
  { command: '$ docker compose up -d', result: 'containerized environment started', status: 'ok' },
  { command: '$ ./gradlew test', result: 'test suite executed', status: 'ok' },
  { command: '$ ./gradlew jacocoTestReport', result: 'coverage report generated', status: 'ok' },
  { command: '$ ./gradlew spotbugsMain', result: '0 warnings', status: 'ok' },
  {
    command: '$ ./gradlew dependencyCheckAnalyze',
    result: 'vulnerability scan completed',
    status: 'ok',
  },
  { command: '$ flyway migrate', result: 'schema migrations applied', status: 'ok' },
  { command: '$ github actions ci', result: 'pipeline passing', status: 'ok' },
  { command: '$ curl /swagger-ui.html', result: 'endpoints verified in production', status: 'ok' },
];

export const engineeringConcepts: string[] = [
  'TESTING',
  'CODE QUALITY',
  'SECURITY',
  'CI',
  'CONTAINERIZATION',
  'API DOCUMENTATION',
  'DATABASE MIGRATIONS',
];
