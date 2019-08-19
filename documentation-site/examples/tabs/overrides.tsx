import * as React from 'react';
import {StatefulTabs, Tab, StyledTab} from 'baseui/tabs';
import {Label2} from 'baseui/typography';

function TabOverride({children, ...rest}: any) {
  return (
    <StyledTab {...rest}>
      <Label2
        overrides={{
          Block: {
            style: {color: 'inherit', ':hover': {color: 'inherit'}},
          },
        }}
      >
        {children}
      </Label2>
    </StyledTab>
  );
}

const tabStyle = ({$active, $disabled, $theme}: any) => ({
  outlineColor: $theme.colors.white,
  color: $active ? $theme.colors.mono100 : $theme.colors.mono300,
  ':hover': $disabled
    ? {}
    : {
        color: $theme.colors.mono100,
      },
  ':focus': $disabled
    ? {}
    : {
        color: $theme.colors.mono100,
      },
});

const tabBarStyle = ({$theme}: any) => ({
  backgroundColor: $theme.colors.mono600,
});

const tabContentStyle = ({$theme}: any) => ({
  borderLeftWidth: '2px',
  borderRightWidth: '2px',
  borderBottomWidth: '2px',
  borderTopWidth: '0',
  borderStyle: 'dashed',
  borderColor: $theme.colors.mono600,
});

const content = ['Tab Content 1', 'Tab Content 2', 'Tab Content 3'];

export default function Example() {
  const [activeKey, setActiveKey] = React.useState<string | number>(
    '0',
  );
  return (
    <StatefulTabs
      initialState={{activeKey: activeKey}}
      onChange={({activeKey}) => {
        setActiveKey(activeKey);
      }}
      overrides={{
        TabBar: {
          style: tabBarStyle,
        },
        TabContent: {
          style: tabContentStyle,
        },
      }}
    >
      <Tab
        overrides={{
          Tab: {component: TabOverride, style: tabStyle},
        }}
        title="Tab Link 1"
      >
        <div>{content[Number(activeKey)]}</div>
      </Tab>
      <Tab
        overrides={{
          Tab: {component: TabOverride, style: tabStyle},
        }}
        title="Tab Link 2"
      >
        <div>{content[Number(activeKey)]}</div>
      </Tab>
      <Tab
        overrides={{
          Tab: {component: TabOverride, style: tabStyle},
        }}
        title="Tab Link 3"
      >
        <div>{content[Number(activeKey)]}</div>
      </Tab>
    </StatefulTabs>
  );
}