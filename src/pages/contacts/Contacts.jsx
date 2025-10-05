import * as React from 'react';
import {
  DataGrid,
  Toolbar,
  ColumnsPanelTrigger,
  ToolbarButton,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterTrigger,
  QuickFilterControl,
  QuickFilterClear,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import {rows, columns} from './data';
import {Button, ThemeProvider, useTheme} from '@mui/material';
import { Cancel, Search } from '@mui/icons-material';
import clsx from 'clsx';
import { TailwindDemoContainer } from '@mui/x-data-grid/internals';

export default function Contacts({window}) {

  const theme = useTheme();
  
  function TextInput(props) {
    return (
      <input
        {...props}
        className={clsx(
          'h-9 w-full rounded border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 px-2.5 text-base text-neutral-900 dark:text-neutral-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600',
          props.className
        )}
      />
    );
  }

  function CustomToolbar() {
    return (
      <Toolbar className="gap-2! p-2!">
        <ColumnsPanelTrigger
          render={<ToolbarButton render={<Button>Columns</Button>} />}
        />
        <FilterPanelTrigger
          render={<ToolbarButton render={<Button>Filter</Button>} />}
        />
        <ExportCsv
          render={<ToolbarButton render={<Button>Export</Button>} />}
        />
        <ExportPrint
          render={<ToolbarButton render={<Button>Print</Button>} />}
        />
        <QuickFilter
          render={(props, state) => (
            <div {...props} className="ml-auto flex overflow-clip">
              <QuickFilterTrigger
                className={state.expanded ? 'rounded-r-none border-r-0' : ''}
                render={
                  <ToolbarButton
                    render={
                      <Button aria-label="Search">
                        <Search fontSize="small" />
                      </Button>
                    }
                  />
                }
              />
              <div
                className={clsx(
                  'flex overflow-clip transition-all duration-300 ease-in-out',
                  state.expanded ? 'w-48' : 'w-0'
                )}
              >
                <QuickFilterControl
                  aria-label="Search"
                  placeholder="Search"
                  render={({slotProps, size, ...controlProps}) => (
                    <TextInput
                      {...controlProps}
                      {...slotProps?.htmlInput}
                      className={clsx(
                        'flex-1 rounded-l-none',
                        state.expanded && state.value !== '' && 'rounded-r-none'
                      )}
                    />
                  )}
                />
                {state.expanded && state.value !== '' && (
                  <QuickFilterClear
                    render={
                      <Button aria-label="Clear" className="rounded-l-none">
                        <Cancel fontSize="small" />
                      </Button>
                    }
                  />
                )}
              </div>
            </div>
          )}
        />
      </Toolbar>
    );
  }
const documentBody = window !== undefined ? window().document.body : undefined;
  return (
    <Box sx={{height: 800, width: '100%'}}>
      <ThemeProvider theme={theme}>
        <TailwindDemoContainer documentBody={documentBody}>
          <DataGrid
            slots={{toolbar: CustomToolbar}}
            showToolbar
            rows={rows}
            // @ts-ignore
            columns={columns}
          />
        </TailwindDemoContainer>
      </ThemeProvider>
    </Box>
  );
}
