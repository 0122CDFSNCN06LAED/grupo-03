select * 
from movies m 
where title like '%harry potter%'

select *
from actors
where first_name ='sam'

select title 
from movies 
where extract(year from release_date) between "2004" and "2008";

select title 
from movies 
where release_date between "2004-01-01" and "2008-12-31"



SELECT nombre,compositor  
FROM canciones 
ORDER BY nombre 
LIMIT 5 offset 5