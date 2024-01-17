import { TitleList, TitleButton, TitleText, Content } from "./styled";


function Tabs({ tabs, activeTab = 0 }) {
  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton active="true" key={item.title}>
                  <TitleText small="true" active="true">
                    {item.title}
                  </TitleText>
                </TitleButton>
              );
            }
            return (
              <TitleButton key={item.title}>
                <TitleText small="true">
                  {item.title}
                </TitleText>
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </div>
  );
}


export default Tabs;
