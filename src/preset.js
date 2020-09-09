const { Preset } = require('use-preset');

module.exports = Preset.make('dev-setup')
	.copyTemplates()
	.installDependencies();
