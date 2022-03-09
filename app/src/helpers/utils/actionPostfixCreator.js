import { ACTION_POSTFIXES } from '../../constants/actionPostfixes';

const { REQUEST_POSTFIX } = ACTION_POSTFIXES;

const actionPostfixCreator = (action, payload, postfix) => {
  return {
    type:
      action.type.slice(0, action.type.length - REQUEST_POSTFIX.length) +
      postfix,
    payload: {
      response: payload.response,
      actionPayload: payload.actionPayload,
    },
  };
};

export default actionPostfixCreator;
