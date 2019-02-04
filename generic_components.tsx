import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";
import { PropTypesOf, DefaultPropsOf } from "./custom_types";

class GenericComponent<TValue> extends Component<
  GenericComponentProps<TValue>,
  GenericComponentState
> {
  public readonly state: Readonly<GenericComponentState> = {};

  public render() {
    const { title, subtitle, value } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{value}</p>
      </div>
    );
  }

  public static readonly propTypes: PropTypesOf<GenericComponentProps<any>> = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.any,
    list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    children: PropTypes.node
  };

  public static readonly defaultProps: DefaultPropsOf<
    GenericComponentProps<any>,
    "title"
  > = {
    title: "Generic Component"
  };
}

interface GenericComponentProps<TValue> {
  title: string;
  subtitle: string;
  value: TValue;
  info: string | number;
  list: string[];
  children?: ReactNode;
}

interface GenericComponentState {}

export default class App extends Component {
  render() {
    return <GenericComponent<number> subtitle="Sub" value={5} />;
  }
}
