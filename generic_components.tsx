import React, {
  Component,
  ReactNode,
  WeakValidationMap,
  ReactElement,
  useState
} from "react";
import PropTypes from "prop-types";
import { DefaultPropsOf } from "./custom_types";

class GenericClassComponent<TValue> extends Component<
  GenericComponentProps<TValue>,
  GenericComponentState<TValue>
> {
  public readonly state: Readonly<GenericComponentState<TValue>> = {
    internalValue: this.props.value
  };

  public render() {
    const { title, subtitle, value } = this.props;
    const { internalValue } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{value}</p>
        <p>{internalValue}</p>
      </div>
    );
  }

  public static readonly propTypes: WeakValidationMap<
    GenericComponentProps<any>
  > = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.any,
    data: PropTypes.shape<WeakValidationMap<User>>({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    children: PropTypes.node
  };

  public static readonly defaultProps: DefaultPropsOf<
    GenericComponentProps<any>,
    "title" | "subtitle"
  > = {
    title: "Generic Component",
    subtitle: ""
  };
}

function GenericFunctionComponent<TValue>({
  title = "Generic Component",
  subtitle = "",
  value
}: GenericComponentProps<TValue>): ReactElement {
  const [internalValue] = useState<TValue>(value);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{value}</p>
      <p>{internalValue}</p>
    </div>
  );
}

interface GenericComponentProps<TValue> {
  title: string;
  subtitle: string;
  value: TValue;
  info: string | number;
  data: User;
  list: string[];
  children?: ReactNode;
}

interface GenericComponentState<TValue> {
  internalValue: TValue;
}

export default class App extends Component {
  render() {
    const user: User = { id: 1, name: "User 1" };
    return (
      <div>
        <GenericClassComponent<number>
          subtitle="Sub"
          value={5}
          info=""
          list={[]}
          data={user}
        />

        <GenericFunctionComponent<number>
          title="Title"
          subtitle="Sub"
          value={5}
          info=""
          list={[]}
          data={user}
        />
      </div>
    );
  }
}

interface User {
  id: number;
  name: string;
}
