<?php
$users = array(
	array(
		'id'=> 1,
		'first_name'=> 'Deepak',
		'last_name'=> 'Manwal'
	),
	array(
                'id'=> 2,
                'first_name'=> 'aa',
                'last_name'=> 'aa'
        ),
	array(
                'id'=> 3,
                'first_name'=> 'bb',
                'last_name'=> 'bb'
        ),
	array(
                'id'=> 4,
                'first_name'=> 'cc',
                'last_name'=> 'cc'
        )
);
echo json_encode($users);
