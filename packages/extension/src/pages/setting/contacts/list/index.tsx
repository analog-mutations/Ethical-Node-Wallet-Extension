import { observer } from "mobx-react-lite";
import React, { FunctionComponent, useEffect, useState } from "react";
import { BackButton } from "../../../../layouts/header/components";
import { HeaderLayout } from "../../../../layouts/header";
import styled from "styled-components";
import { Stack } from "../../../../components/stack";
import { useStore } from "../../../../stores";
import {
  // Column,
  Columns,
} from "../../../../components/column";
// import { Dropdown } from "../../../../components/dropdown";
import { Box } from "../../../../components/box";
import { Button } from "../../../../components/button";
import { useNavigate } from "react-router";
// import { useSearchParams } from "react-router-dom";
import { AddressItem } from "../../../../components/address-item";
import { useConfirm } from "../../../../hooks/confirm";
import { EmptyView } from "../../../../components/empty-view";
import { Gutter } from "../../../../components/gutter";
import { useIntl } from "react-intl";
import { LuContact } from "react-icons/lu";
import { SearchTextInput } from "../../../../components/input/search-text-input";
import { useFocusOnMount } from "../../../../hooks/use-focus-on-mount";
import { ColorPalette } from "../../../../styles";

const Styles = {
  Container: styled(Stack)`
    padding: 0.75rem;
  `,
  ItemList: styled(Stack)`
    margin-top: 1rem;
  `,
};

type contactList =  {
  key: String;
  addresses?: JSX.Element[] | undefined;
}[]
export const SettingContactsList: FunctionComponent = observer(() => {
  const { chainStore, uiConfigStore } = useStore();
  const navigate = useNavigate();
  const intl = useIntl();

  // const [searchParams, setSearchParams] = useSearchParams();
  // Handle "chainId" state by search params to persist the state between page changes.
  // const paramChainId = searchParams.get("chainId");

  const [contactsList,setContactsList] = useState<contactList>();
  const [change,setChange] = useState(false);

  // const chainId = paramChainId || chainStore.chainInfos[0].chainId;
  const confirm = useConfirm();

  const [search, setSearch] = useState("");
  const searchRef = useFocusOnMount<HTMLInputElement>();

  // useLayoutEffect(() => {
  //   if (!paramChainId) {
  //     setSearchParams(
  //       { chainId: chainStore.chainInfos[0].chainId },
  //       {
  //         replace: true,
  //       }
  //     );
  //   }
  // }, [chainStore.chainInfos, paramChainId, setSearchParams]);

  // const items = chainStore.chainInfos.map((chainInfo) => {
  //   return {
  //     key: chainInfo.chainId,
  //     label: chainInfo.chainName,
  //   };
  // });
const getContactList = () => chainStore.chainInfos.map((chainInfo) => {
   
  const addresses = uiConfigStore.addressBookConfig.getAddressBook(chainInfo.chainId);
  if(addresses.length > 0){
    
    const filtered = search ? addresses.filter(data => data.name.toLowerCase().includes(search.toLowerCase()) ) : addresses;

  const chainAddresses = filtered.map((data, i) => {

    // if(data.name.toLowerCase().includes(search.toLowerCase())){
    return(<AddressItem
          key={i}
          name={data.name}
          address={data.address}
          memo={data.memo}
          isShowMemo={true}
          dropdownItems={[
            {
              key: "change-contact-label",
              label: intl.formatMessage({
                id: "page.setting.contacts.list.dropdown.edit-contact-label",
              }),
              onSelect: () =>
                navigate(
                  `/setting/contacts/add?chainId=${chainInfo.chainId}&editIndex=${i}`
                ),
            },
            {
              key: "delete-contact",
              label: intl.formatMessage({
                id: "page.setting.contacts.list.dropdown.delete-contact-label",
              }),
              onSelect: async () => {
                if (
                  await confirm.confirm(
                    intl.formatMessage({
                      id: "page.setting.contacts.list.dropdown.delete-contact-confirm-title",
                    }),
                    intl.formatMessage({
                      id: "page.setting.contacts.list.dropdown.delete-contact-confirm-paragraph",
                    })
                  )
                ) {
                  uiConfigStore.addressBookConfig.removeAddressBookAt(
                    chainInfo.chainId,
                    i
                  );
                  setChange(!change);

                }
              },
            },
          ]}
        />)
    // }

    })

    return {
      key:`${chainInfo.chainId}`,
      addresses:chainAddresses
    }
  } else{

  return {
    key:`${chainInfo.chainId}`,
  }
}

});

  useEffect(()=>{
    setContactsList([])
    const contactLists: contactList = getContactList();

    if(contactLists && contactLists.length > 0){
    setContactsList([...contactLists])
    }
  },[search,chainStore.chainInfos,change])



  // const addresses = uiConfigStore.addressBookConfig.getAddressBook(chainId);

  return (
    <HeaderLayout
      title={intl.formatMessage({ id: "page.setting.general.contacts-title" })}
      left={<BackButton />}
      right={<LuContact style={{fontSize:`1.5rem`,padding:`2px`,border:`0.4px solid ${ColorPalette["gray-400"]}`,borderRadius:'6px', marginRight: `20px`, }}  />}
    >
      <Styles.Container>
        <Columns sum={1} alignY="center">
          <Box width="100%">
            {/* <Dropdown
              items={items}
              selectedItemKey={chainId}
              onSelect={(key) => {
                setSearchParams(
                  { chainId: key },
                  {
                    replace: true,
                  }
                );
              }}
              allowSearch={true}
            /> */}
          <SearchTextInput
          ref={searchRef}
          value={search}
          onChange={(e) => {
            e.preventDefault();

            setSearch(e.target.value);
          }}
          placeholder={intl.formatMessage({
            id: "page.setting.general.contacts.search-placeholder",
          })}
        />
          </Box>
        </Columns>

        <Box
          style={{
            minHeight: `390px`,
            overflowY: `scroll`,
            maxHeight: `390px`,
            marginBottom: `20px`,
          }}
        >
          <Styles.ItemList gutter="0.5rem">
          {(contactsList && contactsList.length > 0) ?
           (contactsList.map((listObj) => {
                const {  addresses } = listObj;
              return (<>
                {addresses?.map(contact => contact)}
              </>)
            })) : (
              <React.Fragment>
                <Gutter size="7.5rem" direction="vertical" />
                <EmptyView
                  subject={intl.formatMessage({
                    id: "page.setting.contacts.list.empty-view-subject",
                  })}
                />
              </React.Fragment>
            )
          }



            {/* {addresses.length > 0 && (
              addresses.map((data, i) => {
                return (
                  <AddressItem
                    key={i}
                    name={data.name}
                    address={data.address}
                    memo={data.memo}
                    isShowMemo={true}
                    dropdownItems={[
                      {
                        key: "change-contact-label",
                        label: intl.formatMessage({
                          id: "page.setting.contacts.list.dropdown.edit-contact-label",
                        }),
                        onSelect: () =>
                          navigate(
                            `/setting/contacts/add?chainId=${chainId}&editIndex=${i}`
                          ),
                      },
                      {
                        key: "delete-contact",
                        label: intl.formatMessage({
                          id: "page.setting.contacts.list.dropdown.delete-contact-label",
                        }),
                        onSelect: async () => {
                          if (
                            await confirm.confirm(
                              intl.formatMessage({
                                id: "page.setting.contacts.list.dropdown.delete-contact-confirm-title",
                              }),
                              intl.formatMessage({
                                id: "page.setting.contacts.list.dropdown.delete-contact-confirm-paragraph",
                              })
                            )
                          ) {
                            uiConfigStore.addressBookConfig.removeAddressBookAt(
                              chainId,
                              i
                            );
                          }
                        },
                      },
                    ]}
                  />
                );
              })
            )}  */}
            {/* : (
              <React.Fragment>
                <Gutter size="7.5rem" direction="vertical" />
                <EmptyView
                  subject={intl.formatMessage({
                    id: "page.setting.contacts.list.empty-view-subject",
                  })}
                />
              </React.Fragment>
            )
            } */}
          </Styles.ItemList>
        </Box>

        <Button
          color="secondary"
          size="large"
          text={intl.formatMessage({
            id: "page.setting.contacts.list.add-new-button",
          })}
          onClick={() => navigate(`/setting/contacts/add`)}
        />
      </Styles.Container>
    </HeaderLayout>
  );
});
