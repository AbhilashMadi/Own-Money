module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensure import paths start with a specified alias',
      category: 'Best Practices',
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const sourceValue = node.source.value;
        if (!sourceValue.startsWith('@')) {
          context.report({
            node,
            message: 'Import path should start with @ alias',
          });
        }
      },
    };
  },
};
