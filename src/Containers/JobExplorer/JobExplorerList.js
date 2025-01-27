import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { TableComposable, Thead, Tbody, Tr, Th } from '@patternfly/react-table';
import JobExplorerListRow from './JobExplorerListRow';

const cols = ['Id/Name', 'Status', 'Cluster', 'Organization', 'Type'];
const sortableCols = ['Id/Name', 'Status', 'Type'];

const sortMap = {
  0: 'id',
  1: 'status',
  4: 'job_type',
};

const reverseSortMap = {
  id: 0,
  status: 1,
  job_type: 4,
};

const JobExplorerList = ({ jobs, queryParams, queryParamsDispatch }) => {
  const [sortIdx, setSortIdx] = useState(-1);
  const [sortDir, setSortDir] = useState('none');

  useEffect(() => {
    if (queryParams?.sort_options in reverseSortMap) {
      setSortIdx(reverseSortMap[queryParams.sort_options]);
      setSortDir(
        queryParams?.sort_order &&
          (queryParams.sort_order === 'desc' ||
            queryParams.sort_order === 'asc')
          ? queryParams.sort_order
          : 'desc'
      );
    } else {
      setSortIdx(-1);
      setSortDir('none');
    }
  }, [queryParams]);

  const onSort = (_event, idx, dir) => {
    if (idx !== sortIdx) {
      setSortIdx(idx);
      queryParamsDispatch({
        type: 'SET_SORT_OPTIONS',
        value: { sort_options: sortMap[idx] },
      });
    }

    if (dir !== sortDir) {
      setSortDir(dir);
      queryParamsDispatch({
        type: 'SET_SORT_ORDER',
        value: { sort_order: dir },
      });
    }
  };

  return (
    <TableComposable aria-label="Job Explorer Table" variant="compact">
      <Thead>
        <Tr>
          <Th />
          {cols.map((head, idx) => {
            const params = sortableCols.includes(head)
              ? {
                  sort: {
                    sortBy: {
                      index: sortIdx,
                      direction: sortDir,
                    },
                    onSort,
                    columnIndex: idx,
                  },
                }
              : {};
            return (
              <Th key={`col-${idx}`} {...params}>
                {head}
              </Th>
            );
          })}
        </Tr>
      </Thead>
      <Tbody>
        {jobs.map((job) => (
          <JobExplorerListRow job={job} key={job.id.id} />
        ))}
      </Tbody>
    </TableComposable>
  );
};

JobExplorerList.propTypes = {
  jobs: PropTypes.array.isRequired,
  queryParams: PropTypes.object.isRequired,
  queryParamsDispatch: PropTypes.func.isRequired,
};

export default JobExplorerList;
