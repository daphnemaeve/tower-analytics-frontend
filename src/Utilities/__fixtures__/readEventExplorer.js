export default {
    data: {
        items: {
            cluster_id: [
                0
            ],
            org_id: [
                0
            ],
            inventory_id: [
                0
            ],
            template_id: [
                0
            ],
            quick_date_range: 'last_62_days',
            start_date: '2021-05-12',
            end_date: '2021-05-12',
            only_root_workflows_and_standalone_jobs: true,
            job_type: [
                'workflowjob'
            ],
            status: [
                'new'
            ],
            attributes: [
                'duration'
            ],
            include_others: true,
            group_by: 'cluster',
            group_by_time: true,
            granularity: 'daily',
            task_id: [
                0
            ],
            task_action_id: [
                0
            ]
        }
    },
    response: { msg: 'Success' },
    url: '/api/tower-analytics/v1/event_explorer/'
};

