import { Fragment } from "react";
import avatar from "../src/assets/images/paladin.png";

const scrollerMessages = [
  <Fragment>
    Welcome, traveler. The light still holds but the shadows grow restless. Walk
    carefully, and stay within the glow of faith..
  </Fragment>,
  <Fragment>Not all that watches you in the dark is human..</Fragment>,
  <Fragment>
    Web app using: Reactjs, Vite, FontAwesome, SVG Backgrounds, Use Sound...
  </Fragment>,
  <Fragment>Sounds from Zapsplat and Little Robot Sound Factory...</Fragment>,
];

const profile = {
  avatar: avatar,
  name: "Hayashiro",
  vocation: "Demon Hunter",
  attributes: [
    { field: "exprience", value: 241043 },
    { field: "health", value: 1230 },
    { field: "distance", value: 71 },
    { field: "speed", value: 43 },
  ],
};

const content = {
  profile: [
    <Fragment>
      A devout paladin whose presence carries both warmth and quiet authority.
      Once burdened by a choice that cost innocent lives, she has sworn herself
      to the light in pursuit of redemption. Clad in radiant armor and guided by
      sacred vows, she walks the line between compassion and judgment, offering
      mercy where she can{" "}
      <span className="highlight">and steel where she must</span>.
    </Fragment>,
    <Fragment>
      She is as devoted to restoring her own honor as she is to seeing your
      quest fulfilled, believing that through service and sacrifice, even the
      deepest wounds of the soul can be made whole.
    </Fragment>,
  ],
  spellbook: [
    <Fragment>
      <span className="highlight">
        SPELLBOOK SECTION - this is lorem ipsum content added for testing
      </span>{" "}
      - Etiam gravida malesuada leo ut pulvinar. Sed cursus mollis faucibus.
      Phasellus nec erat mi. Fusce ultricies dolor nec pretium bibendum. Cras
      non purus a urna tincidunt scelerisque. Nunc lobortis consectetur ligula
      ut placerat. Sed sagittis neque erat, ultrices.
    </Fragment>,
    <Fragment>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
      finibus nisl, quis interdum ante. In hac habitasse platea dictumst.
      Vivamus rutrum est et pulvinar vestibulum. Morbi tellus felis, sagittis
      eget ultricies sed, pretium nec massa. Vivamus eros urna, sodales.
    </Fragment>,
  ],
  abilities: [
    <Fragment>
      Trained in sacred combat and divine invocation, she can shield allies with
      blessed wards, heal wounds through prayer, and smite foes with radiant
      force when mercy is no longer an option. Her aura steadies the frightened
      and silences the corrupt, often turning the tide of battle before steel is
      even drawn.
    </Fragment>,
  ],
  statistics: [
    <Fragment>
      High strength and constitution, reflecting her mastery of armored combat
      and endurance in prolonged battles. Strong wisdom fuels her divine magic
      and judgment, while moderate charisma allows her to inspire allies and
      command respect. Dexterity is lower due to heavy armor training, and
      intelligence is average, focused more on doctrine and experience than
      scholarship.
    </Fragment>,
  ],
  equipment: [
    <Fragment>
      Clad in radiant, holy-forged armor etched with protective runes, she
      carries a blessed longsword that channels divine light into each strike. A
      consecrated shield bears her oath sigil, able to deflect both blade and
      dark magic alike, while a worn prayer book and sacred relics at her side
      anchor her divine abilities and vows.
    </Fragment>,
  ],
};

export { scrollerMessages, profile, content };
