module.exports = {
    options: {
        base: 'build',
        dotfiles: false,
        branch: 'master',
        message: 'Deploy to GitHub Pages.',
    },
    local: {
        src: ['**'],
    },
    travis: {
        options: {
            repo: `https://${process.env.GH_TOKEN}@github.com/kata-team/kata-team.github.io.git`,
            message: 'Deploy to GitHub Pages from Travis CI.',
        },
        src: ['**'],
    },
};
