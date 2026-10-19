import Section from "./Section";

function Guide() {
  return (
    <div role="group" aria-label="Git repository setup guide">
      <Section
        id="create"
        title="Create"
        description="Creates an empty Git repository in the current folder."
        command="git init"
      />
      <Section
        id="rename"
        title="Rename"
        description="Renames the current branch to main."
        command="git branch -M main"
      />
      <Section
        id="connect"
        title="Connect"
        description="Links this local project to your GitHub repository under the name origin. Replace the URL with your repository URL."
        command="git remote add origin https://github.com/USERNAME/REPOSITORY.git"
      />
      <Section
        id="upload"
        title="Upload"
        description="Sends the main branch to the remote named origin."
        command="git push -u origin main"
      />
    </div>
  );
}

export default Guide;

