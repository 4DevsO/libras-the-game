import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sDisabled: undefined,
      sSuccess: undefined
    };
  }
  render() {
    const {
      title,
      onClick,
      primary,
      success,
      warning,
      error,
      disabled,
      onWin,
      style
    } = this.props;

    const { sDisabled, sSuccess } = this.state;

    const isPrimary = primary ? 'is-primary' : '';
    const isSuccess = success || sSuccess ? 'is-success' : '';
    const isWarning = warning ? 'is-warning' : '';
    const isError = error ? 'is-error' : '';
    const isDisabled = disabled || sDisabled ? { opacity: 0.5 } : '';

    return (
      <button
        className={`btn ${isPrimary} ${isSuccess} ${isWarning} ${isError}`}
        disabled={!!isDisabled}
        style={{ ...style, ...isDisabled }}
        onClick={() => {
          if (onClick()) {
            this.setState({ sDisabled: true });
          } else {
            this.setState({ sSuccess: true });
            setTimeout(onWin, 500);
          }
        }}
      >
        {title}
      </button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
