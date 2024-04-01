import * as React from 'react';
import { StyleRules, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core/styles';
import { ObjectKeysToUnion } from './type';

// const style = {
//   anyStyleName: {
//     paddingTop: 10,
//   },
// } satisfies StyleRules;

const style = (({}) => ({
  anyStyleName: {
    paddingTop: 10,
  },
})) satisfies StyleRulesCallback;

const decorate = withStyles(style);

type IProps = WithStyles<ObjectKeysToUnion<typeof style>>;

class Component extends React.Component<IProps, {}> {
  render() {
    const { classes } = this.props;

    // Ошибка для демонстрации
    return <div className={classes.container}></div>;
  }
}

export default decorate(Component);
