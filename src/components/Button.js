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
            setTimeout(() => {
              this.setState({ sSuccess: true });
              setTimeout(() => {
                this.setState({ sSuccess: false });
                setTimeout(() => {
                  this.setState({ sSuccess: true });
                  setTimeout(() => {
                    onWin();
                  }, 250);
                }, 250);
              }, 250);
            }, 250);
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
