import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxilary/Auxilary";
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterceptors = axios.interceptors.response.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptors = axios.interceptors.response.use(
        req => req,
        err => {
          this.setState({ error: err });
        }
      );
    }

    componentWillUnmount() {
      // console.log('[Componet Will UnMount]',this.reqInterceptors,this.resInterceptors)
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.request.eject(this.resInterceptors);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}></WrappedComponent>
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
