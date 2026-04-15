import { Fragment } from "react";

const scrollerMessages = [
  <Fragment>
    Welcome fellow visitor from Planet Earth ! I'm glad you came by, feel free
    to take a look around...
  </Fragment>,
  <Fragment>
    Web app using: Reactjs, Vite, FontAwesome, SVG Backgrounds, Axios & Use
    Sound...
  </Fragment>,
  <Fragment>Another example message...</Fragment>,
];

const profile = {
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
      In eget blandit ex. Etiam gravida malesuada leo ut pulvinar. Sed cursus
      mollis faucibus. Phasellus nec erat mi. Fusce ultricies dolor nec pretium
      bibendum. Cras non purus a urna tincidunt scelerisque. Nunc lobortis
      consectetur ligula ut placerat. Sed sagittis neque erat, ultrices.
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
      section 2 Etiam gravida malesuada leo ut pulvinar. Sed cursus mollis
      faucibus. Phasellus nec erat mi. Fusce ultricies dolor nec pretium
      bibendum. Cras non purus a urna tincidunt scelerisque. Nunc lobortis
      consectetur ligula ut placerat.
    </Fragment>,
  ],
  statistics: [
    <Fragment>
      section 3 Etiam gravida malesuada leo ut pulvinar. Sed cursus mollis
      faucibus. Phasellus nec erat mi. Fusce ultricies dolor nec pretium
      bibendum. Cras non purus a urna tincidunt scelerisque. Nunc lobortis
      consectetur ligula ut placerat.
    </Fragment>,
  ],
  equipment: [
    <Fragment>
      section 4 Etiam gravida malesuada leo ut pulvinar. Sed cursus mollis
      faucibus. Phasellus nec erat mi. Fusce ultricies dolor nec pretium
      bibendum.
    </Fragment>,
  ],
};

export { scrollerMessages, profile, content };
