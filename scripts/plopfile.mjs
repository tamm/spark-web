export default function newPackage(
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setHelper('website', () => 'https://spark.brighte.com.au');

  plop.setGenerator('component', {
    description: 'Add new component',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'Package name, all lowercase (e.g. button)',
        validate: answer => answer.length > 0,
      },
      {
        type: 'input',
        name: 'componentName',
        message:
          'Component name, please use appropriate uppercase (e.g. Button)',
        validate: answer => answer.length > 0,
      },
      {
        type: 'list',
        name: 'projectCategory',
        message:
          'Component category, what category does this component belong to?',
        choices: [
          'Accessibility',
          'Data Display',
          'Feedback & Overlays',
          'Forms',
          'Navigation',
          'Page & Layout',
          'Typography',
        ],
      },
    ],

    actions: answers => {
      const actions = [];
      if (!answers) return actions;

      const { componentName, packageName, projectCategory } = answers;

      const projectCategorySlug = mapProjectCategory[projectCategory];

      actions.push({
        type: 'addMany',
        templateFiles: '../plop-templates/component/**',
        base: '../plop-templates/component/',
        destination: `../packages/${packageName}`,
        data: { componentName, packageName, projectCategorySlug },
      });

      actions.push({
        type: 'modify',
        path: '../docs/package.json',
        pattern: /"dependencies": {/,
        template:
          '"dependencies": {\n"@spark-web/{{packageName}}": "^0.0.0",\n',
      });

      return actions;
    },
  });
}

const mapProjectCategory = {
  Accessibility: 'accessibility',
  'Data Display': 'data-display',
  'Feedback & Overlays': 'feedback-overlays',
  Forms: 'forms',
  Navigation: 'navigation',
  'Page & Layout': 'page-layout',
  Typography: 'typography',
};
