import React from 'react';
import { node, string } from 'prop-types';
import { Popover as PFPopover } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import styled from 'styled-components';

const PopoverButton = styled.button`
  padding: var(--pf-global--spacer--xs);
  margin: -(var(--pf-global--spacer--xs));
  font-size: var(--pf-global--FontSize--sm);
`;

function Popover({ ariaLabel, content, header, id, maxWidth, ...rest }) {
  if (!content) {
    return null;
  }

  return (
    <PFPopover
      bodyContent={content}
      headerContent={header}
      hideOnOutsideClick
      id={id}
      maxWidth={maxWidth}
      {...rest}
    >
      <PopoverButton
        aria-label={ariaLabel ?? 'More information'}
        aria-haspopup="true"
        className="pf-c-form__group-label-help"
        onClick={(e) => e.preventDefault()}
        type="button"
      >
        <HelpIcon noVerticalAlign />
      </PopoverButton>
    </PFPopover>
  );
}

Popover.propTypes = {
  ariaLabel: string,
  content: node,
  header: node,
  id: string,
  maxWidth: string,
};
Popover.defaultProps = {
  ariaLabel: null,
  content: null,
  header: null,
  id: '',
  maxWidth: '',
};

export default Popover;