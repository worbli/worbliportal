import csv
from worbliportal.database import session
from worbliportal.models import SnapshotBalance

balance_reader = csv.reader(open('snapshot-final.csv', newline=''), delimiter=',')
for row in balance_reader:
	balance = SnapshotBalance(account_name=row[0], owner_key=row[1], 
		active_key=row[2], total_nostake=row[3], staked=row[4], delegated=row[5],
		total=row[6], creation_time=row[7])
    session.add(balance)
session.commit()
