import Mentions from "../components/mentions/Mentions.md";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function MentionsPage() {
  return (
    <main>
      <h1>Mentions</h1>
      <Mentions />
      <ButtonLink href="/">Go back to home</ButtonLink>
    </main>
  );
}
