import { TableActions } from '@/components/data-display';
import { IUnit } from '@/features/units/entities';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type Props = {
  units: IUnit[];
  isLoading?: boolean;
  onDelete: (unit: IUnit) => void;
};

export const ListUnitsTable = ({
  units,
  isLoading,
  onDelete
}: Props): JSX.Element => {
  const { t } = useTranslation('units', { keyPrefix: 'list-units' });
  const navigate = useNavigate();

  const columns: ColumnsType<IUnit> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      responsive: ['md']
    },
    {
      title: t('table.name'),
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: t('table.actions'),
      key: 'actions',
      width: 100,
      render: (_, record) => (
        <TableActions
          data={record}
          onDelete={onDelete}
          onEdit={() => navigate(`${record.id}/edit`)}
        />
      )
    }
  ];

  return (
    <Table
      dataSource={units}
      columns={columns}
      bordered
      loading={isLoading}
      locale={{ emptyText: t('table.no-data') }}
    />
  );
};
